from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import requests
import subprocess
import os
from io import BytesIO
from PIL import Image

app = Flask(__name__)
CORS(app)

# Ensure static directory exists
os.makedirs("static", exist_ok=True)

# Start Lama Cleaner as a background process
subprocess.Popen(["lama-cleaner", "--model=lama", "--device=cpu"])

@app.route("/remove", methods=["POST"])
def remove_object():
    data = request.json
    image_url = data.get("imageUrl")

    if not image_url:
        return jsonify({"error": "No image URL provided"}), 400

    # Download image
    response = requests.get(image_url)
    img = Image.open(BytesIO(response.content))

    # Save the input image
    input_path = "static/input.png"
    img.save(input_path)

    # Process image with Lama Cleaner
    output_path = "static/output.png"
    subprocess.run(["lama-cleaner", "--input", input_path, "--output", output_path])

    return send_file(output_path, mimetype="image/png")

if __name__ == "__main__":
    app.run(port=5000)