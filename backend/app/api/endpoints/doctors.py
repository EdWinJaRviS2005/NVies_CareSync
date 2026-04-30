from fastapi import APIRouter, HTTPException
from typing import List
from app.schemas.domain import Doctor, DoctorCreate
from app.db.supabase_client import db

router = APIRouter()

@router.get("/", response_model=List[Doctor])
def list_doctors(specialty: str = None, is_available: bool = None):
    """List all doctors with optional filtering."""
    query = db.table("doctors").select("*")
    if specialty:
        query = query.eq("specialty", specialty)
    if is_available is not None:
        query = query.eq("is_available", is_available)
        
    try:
        response = query.execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{doctor_id}", response_model=Doctor)
def get_doctor(doctor_id: str):
    """Get a specific doctor's details."""
    try:
        response = db.table("doctors").select("*").eq("id", doctor_id).execute()
        if not response.data:
            raise HTTPException(status_code=404, detail="Doctor not found")
        return response.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/", response_model=Doctor)
def create_doctor(doctor: DoctorCreate):
    """Create a new doctor profile."""
    try:
        response = db.table("doctors").insert(doctor.model_dump()).execute()
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
