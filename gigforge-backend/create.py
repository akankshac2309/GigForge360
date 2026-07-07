import os

# Root backend folder
root = "gigforge-backend"

folders = [
    "controllers",
    "routes",
    "services",
    "middleware",
    "config",
    "models"
]

files = [
    "server.js",
    ".env",
    ".gitignore",
    "README.md",
    "controllers/gigController.js",
    "routes/salesforce.js",
    "services/salesforceService.js",
    "middleware/auth.js",
    "config/db.js",
    "models/Gig.js"
]

# Create root folder
os.makedirs(root, exist_ok=True)

# Create folders
for folder in folders:
    os.makedirs(os.path.join(root, folder), exist_ok=True)

# Create files
for file in files:
    path = os.path.join(root, file)
    with open(path, "w") as f:
        pass

print("✅ GigForge Backend structure created successfully!")