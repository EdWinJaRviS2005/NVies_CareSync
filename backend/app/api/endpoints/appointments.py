from fastapi import APIRouter, HTTPException
from typing import List
from app.schemas.domain import Appointment, AppointmentCreate
from app.db.supabase_client import db

router = APIRouter()

@router.get("/", response_model=List[Appointment])
def list_appointments(doctor_id: str = None):
    """List appointments, optionally filtered by doctor."""
    query = db.table("appointments").select("*")
    if doctor_id:
        query = query.eq("doctor_id", doctor_id)
        
    try:
        response = query.execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/", response_model=Appointment)
def book_appointment(appointment: AppointmentCreate):
    """Book a new appointment."""
    data = appointment.model_dump()
    data["status"] = "scheduled" # default status
    
    try:
        response = db.table("appointments").insert(data).execute()
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.patch("/{appointment_id}/status")
def update_appointment_status(appointment_id: str, status: str):
    """Update appointment status (e.g. cancelled, completed)."""
    try:
        response = db.table("appointments").update({"status": status}).eq("id", appointment_id).execute()
        if not response.data:
            raise HTTPException(status_code=404, detail="Appointment not found")
        return response.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
