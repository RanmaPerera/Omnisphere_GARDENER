# 1. Library imports
import uvicorn
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import io
from PIL import Image
import tensorflow as tf
import tensorflow_hub as hub

# from tensorflow.keras.applications.resnet50 import ResNet50
from tensorflow.keras.preprocessing import image
# from tensorflow.keras.applications.resnet50 import preprocess_input, decode_predictions
# from tensorflow.keras.applications.imagenet_utils import decode_predictions

# from tensorflow.keras.applications.inception_v3 import preprocess_input
# from tensorflow.keras.applications.mobilenet_v2 import preprocess_input

from tensorflow.keras.models import load_model

# import nest_asyncio
# nest_asyncio.apply()


input_shape = [224, 224]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# model=load_model('model_inception.h5')
# model=load_model('mobileNet_v5.h5')
# model=load_model('MNetModel_T3.h5')
model = load_model('PlantVillage_M0.h5', custom_objects={'KerasLayer': hub.KerasLayer})


@app.get('/')
def index():
    print(tf.__version__)
    return {'message': 'Hello, plant desease  V4.0    tf:' + tf.__version__ + '    pre'}


@app.post("/uploadfile/")
async def image(image: UploadFile = File(...)):
    # with open("./dir/destination.jpg", "wb") as buffer:
    # shutil.copyfileobj(image.file, buffer)
    contents = await image.read()
    pil_image = Image.open(io.BytesIO(contents))
    pil_image = pil_image.resize((224, 224))
    x = tf.keras.preprocessing.image.img_to_array(pil_image)
    x = x / 255
    x = np.expand_dims(x, axis=0)
    # img_data=preprocess_input(x)
    pred = model.predict(x)

    #####################

    a = pred[0]
    index = np.where(a == np.amax(a))
    print('index', index[0][0])

    diesease_list = [
        'Apple_scab',
        'Apple_black_rot',
        'Apple_cedar_apple_rust',
        'Apple_healthy',
        'Background_without_leaves',
        'Blueberry_healthy',
        'Cherry_powdery_mildew',
        'Cherry_healthy',
        'Corn_gray_leaf_spot',
        'Corn_common_rust',
        'Corn_northern_leaf_blight',
        'Corn_healthy',
        'Grape_black_rot',
        'Grape_black_measles',
        'Grape_leaf_blight',
        'Grape_healthy',
        'Orange_haunglongbing',
        'Peach_bacterial_spot',
        'Peach_healthy',
        'Pepper_bacterial_spot',
        'Pepper_healthy',
        'Potato_early_blight',
        'Potato_healthy',
        'Potato_late_blight',
        'Raspberry_healthy',
        'Soybean_healthy',
        'Squash_powdery_mildew',
        'Strawberry_healthy',
        'Strawberry_leaf_scorch',
        'Tomato___bacterial_spot',
        'Tomato___early_blight',
        'Tomato___healthy',
        'Tomato___late_blight',
        'Tomato___leaf_mold',
        'Tomato___septoria_leaf_spot',
        'Tomato___spider_mites Two-spotted_spider_mite',
        'Tomato___target_spot',
        'Tomato___mosaic_virus',
        'Tomato___yellow_leaf_curl_virus'
    ]

    condition = diesease_list[index[0][0]]
    return {"filename": image.filename
        , "predict": condition
            }


if __name__ == "__main__":
    uvicorn.run(app, host='127.0.0.1', port=8080)