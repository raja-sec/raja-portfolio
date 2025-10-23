from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
import json
from pathlib import Path
from datetime import datetime

router = APIRouter()

DATA_DIR = Path(__file__).resolve().parent.parent / "data"
CONTACT_FILE = DATA_DIR / "contact.json"


class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str


@router.post("/contact")
def submit_contact(contact: ContactMessage):
    """
    Submit contact form
    Appends message to contact.json
    """
    try:
        # Load existing messages
        try:
            with open(CONTACT_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
        except FileNotFoundError:
            data = {"messages": []}
        except json.JSONDecodeError:
            data = {"messages": []}
        
        # Create new message with timestamp
        new_message = {
            "name": contact.name,
            "email": contact.email,
            "message": contact.message,
            "timestamp": datetime.now().isoformat()
        }
        
        # Append to messages
        if "messages" not in data:
            data["messages"] = []
        
        data["messages"].append(new_message)
        
        # Save back to file
        with open(CONTACT_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        return {
            "status": "received",
            "message": "Thank you for your message!"
        }
    
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error saving contact message: {str(e)}"
        )