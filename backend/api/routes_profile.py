from fastapi import APIRouter, HTTPException
import json
from pathlib import Path

router = APIRouter()

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
PROFILE_FILE = DATA_DIR / "profile.json"


@router.get("/profile")
def get_profile():
    """
    Get profile information
    Returns profile data from profile.json
    """
    try:
        with open(PROFILE_FILE, "r", encoding="utf-8") as f:
            profile_data = json.load(f)
        return profile_data
    except FileNotFoundError:
        raise HTTPException(
            status_code=404,
            detail="Profile data not found"
        )
    except json.JSONDecodeError:
        raise HTTPException(
            status_code=500,
            detail="Error parsing profile data"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error loading profile: {str(e)}"
        )