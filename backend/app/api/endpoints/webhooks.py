from fastapi import APIRouter, Request, HTTPException
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

@router.post("/elevenlabs/webhook")
async def elevenlabs_post_call_webhook(request: Request):
    """
    Webhook receiver for ElevenLabs post-call data.
    """
    try:
        data = await request.json()
        logger.info(f"Received webhook payload: {data}")
        
        # In a real app, you would verify the HMAC signature from ElevenLabs
        # signature = request.headers.get("elevenlabs-signature")
        # verify_signature(signature, data, settings.ELEVENLABS_WEBHOOK_SECRET)
        
        # Process post call data (transcripts, summary, etc.)
        
        return {"status": "success", "message": "Webhook processed"}
    except Exception as e:
        logger.error(f"Error processing webhook: {e}")
        raise HTTPException(status_code=500, detail="Failed to process webhook")
