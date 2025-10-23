from fastapi import APIRouter, HTTPException
import json
from pathlib import Path

router = APIRouter()

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
ABOUT_FILE = DATA_DIR / "about.json"


@router.get("/about")
def get_about():
    """
    Get About Me details
    Returns complete about section data from about.json
    """
    try:
        with open(ABOUT_FILE, "r", encoding="utf-8") as f:
            about_data = json.load(f)
        return about_data
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="About data not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Error parsing about.json")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error loading about: {str(e)}")
