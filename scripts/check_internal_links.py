#!/usr/bin/env python3
"""Check that every internal link in the generated site resolves to a file.

Usage: python3 scripts/check_internal_links.py [public_dir]
"""
import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit

# Assumes the well-formed HTML that Hugo generates; raw HTML in Markdown may slip past.
LINK_RE = re.compile(
    r'(?:href|src)\s*=\s*(?:"([^"]*)"|\'([^\']*)\'|([^\s">]+))', re.IGNORECASE
)
SKIP_PREFIXES = ("http://", "https://", "mailto:", "tel:", "data:", "javascript:", "#", "//")


def resolve(root: Path, page: Path, link: str) -> Path:
    path = unquote(urlsplit(link).path)
    base = root if path.startswith("/") else page.parent
    return (base / path.lstrip("/")).resolve()


def exists(target: Path) -> bool:
    return target.is_file() or (target / "index.html").is_file()


def main(argv: list[str]) -> int:
    root = Path(argv[1] if len(argv) > 1 else "public").resolve()
    if not root.is_dir():
        print(f"error: {root} is not a directory", file=sys.stderr)
        return 2

    broken = []
    for page in root.rglob("*.html"):
        html = page.read_text(encoding="utf-8", errors="ignore")
        for quoted, single, bare in LINK_RE.findall(html):
            link = quoted or single or bare
            if link.startswith(SKIP_PREFIXES) or not link:
                continue
            if not exists(resolve(root, page, link)):
                broken.append((page.relative_to(root), link))

    for page, link in sorted(set(broken)):
        print(f"{page}: {link}")
    print(f"{len(set(broken))} broken internal link(s)")
    return 1 if broken else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
