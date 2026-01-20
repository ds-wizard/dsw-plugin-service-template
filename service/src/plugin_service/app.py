import fastapi


def create_app() -> fastapi.FastAPI:
    app = fastapi.FastAPI(title="Plugin Service")

    @app.get("/health")
    async def health_check():
        return {"status": "healthy"}

    return app
