from fastapi import APIRouter, HTTPException
import json
from pathlib import Path

router = APIRouter()

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
PROJECTS_FILE = DATA_DIR / "projects.json"


@router.get("/projects")
def get_projects():
    """
    Get all projects
    Returns list of projects from projects.json
    """
    try:
        with open(PROJECTS_FILE, "r", encoding="utf-8") as f:
            projects_data = json.load(f)
        return projects_data
    except FileNotFoundError:
        raise HTTPException(
            status_code=404,
            detail="Projects data not found"
        )
    except json.JSONDecodeError:
        raise HTTPException(
            status_code=500,
            detail="Error parsing projects data"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error loading projects: {str(e)}"
        )