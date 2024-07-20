from flask import Flask, request, jsonify

app = Flask(__name__)

# List to keep track of connected VR headsets
vr_headsets = [{"id": "vr1", "name": "VR Headset 1"}, {"id": "vr2", "name": "VR Headset 2"}]

@app.route('/connected_headsets', methods=['GET'])
def get_connected_headsets():
    return jsonify(vr_headsets)

@app.route('/spawn_actor', methods=['POST'])
def spawn_actor():
    # Logic to communicate with Unreal Engine to spawn an actor
    # For now, we'll just print a message to the console
    print('Hello World')
    return jsonify({'status': 'Actor spawned'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
