from fastapi import APIRouter, HTTPException
from pathlib import Path
from typing import List, Dict
import json

router = APIRouter()

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
ARTICLES_DIR = DATA_DIR / "articles"
INDEX_FILE = DATA_DIR / "articles_index.json"


def load_article_index() -> List[Dict]:
    """Load metadata of articles from JSON"""
    try:
        with open(INDEX_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data.get("articles", [])
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Articles index not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Error parsing articles index")


@router.get("/articles")
def get_articles():
    """
    Return all article summaries
    """
    try:
        articles = load_article_index()
        return {"articles": articles}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error loading articles: {str(e)}")


@router.get("/articles/{slug}")
def get_article(slug: str):
    """
    Return full article (metadata + markdown content)
    """
    try:
        # Find metadata
        articles = load_article_index()
        meta = next((a for a in articles if a["slug"] == slug), None)
        if not meta:
            raise HTTPException(status_code=404, detail="Article not found")

        # Load markdown content
        md_path = ARTICLES_DIR / f"{slug}.md"
        if not md_path.exists():
            raise HTTPException(status_code=404, detail=f"Markdown file not found for slug: {slug}")

        content = md_path.read_text(encoding="utf-8")

        return {"meta": meta, "content": content}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error reading article: {str(e)}")


# from fastapi import APIRouter, HTTPException
# from pathlib import Path
# from typing import List, Dict
# import json

# router = APIRouter()

# DATA_DIR = Path(__file__).resolve().parent.parent / "data"
# ARTICLES_DIR = DATA_DIR / "articles"
# INDEX_FILE = DATA_DIR / "articles_index.json"


# def load_article_index() -> List[Dict]:
#     """Load metadata of articles from JSON"""
#     try:
#         with open(INDEX_FILE, "r", encoding="utf-8") as f:
#             data = json.load(f)
#         return data.get("articles", [])
#     except FileNotFoundError:
#         raise HTTPException(status_code=404, detail="Articles index not found")
#     except json.JSONDecodeError:
#         raise HTTPException(status_code=500, detail="Error parsing articles index")


# @router.get("/articles")
# def get_articles():
#     """
#     Return all article summaries
#     """
#     try:
#         articles = load_article_index()
#         print("🔍 DEBUG - Articles loaded:", articles)  # ADD THIS LINE
#         return {"articles": articles}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error loading articles: {str(e)}")


# @router.get("/articles/{slug}")
# def get_article(slug: str):
#     """
#     Return full article (metadata + markdown content)
#     """
#     try:
#         # Find metadata
#         articles = load_article_index()
#         meta = next((a for a in articles if a["slug"] == slug), None)
#         if not meta:
#             raise HTTPException(status_code=404, detail="Article not found")

#         # Load markdown content
#         md_path = ARTICLES_DIR / f"{slug}.md"
#         if not md_path.exists():
#             raise HTTPException(status_code=404, detail=f"Markdown file not found for slug: {slug}")

#         content = md_path.read_text(encoding="utf-8")

#         return {"meta": meta, "content": content}
#     except HTTPException:
#         raise
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error reading article: {str(e)}")
