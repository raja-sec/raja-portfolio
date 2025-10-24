from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import routes_profile, routes_projects, routes_articles, routes_contact, routes_about

app = FastAPI(
    title="Raja Portfolio API",
    version="1.0.0",
    description="Backend API for Raja Indrajit Mishra's Portfolio"
)

# Define the origins that are allowed to make requests
# We will add the Vercel URL later.
origins = [
    "http://localhost:5173",  # Your local dev frontend
    "http://localhost:3000",  # (Just in case)
    # "https://raja-portfolio.vercel.app",
    "https://raja-portfolio-omega.vercel.app"
    # We will add your live Vercel URL here in Phase 4
]

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "message": "Raja Portfolio API",
        "status": "running",
        "version": "1.0.0"
    }

# Include routers
app.include_router(routes_profile.router, prefix="/api", tags=["Profile"])
app.include_router(routes_projects.router, prefix="/api", tags=["Projects"])
app.include_router(routes_articles.router, prefix="/api", tags=["Articles"])
app.include_router(routes_contact.router, prefix="/api", tags=["Contact"])
app.include_router(routes_about.router, prefix="/api", tags=["About"])