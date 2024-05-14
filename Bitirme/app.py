from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS = CORS(app)

# Örnek ürün veritabanı
products = [
    {"id": 1, "name": "Tablet A", "category": "Tablet", "description": "Tablet A'nın harika özelliklerine göz atın!", "sites": [{"name": "Site A", "price": 1000}, {"name": "Site B", "price": 1100}]},    
    {"id": 3, "name": "Laptop A", "category": "Laptop", "description": "Laptop A'nın güçlü performansını keşfedin!", "sites": [{"name": "Site A", "price": 1500}, {"name": "Site B", "price": 1550}]},
    {"id": 2, "name": "Tablet B", "category": "Tablet", "description": "Tablet B'nin hafif tasarımını seveceksiniz!", "sites": [{"name": "Site A", "price": 800}, {"name": "Site B", "price": 850}]},
    {"id": 4, "name": "Mouse X", "category": "Mouse", "description": "Mouse X ile daha rahat çalışın!", "sites": [{"name": "Site A", "price": 50}, {"name": "Site B", "price": 55}]},
    {"id": 5, "name": "Keyboard Y", "category": "Keyboard", "description": "Keyboard Y'nin dayanıklı yapısıyla tanışın!", "sites": [{"name": "Site A", "price": 80}, {"name": "Site B", "price": 85}]},    
    {"id": 6, "name": "Telefon A" , "category" : "Telefon", "descriprtion": "Telefon A'nın kamerası çok iyi!", "sites" : [{"name": "Site A", "price": 1500},{"name": "Site B", "price": 1700}]}
]

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = next((product for product in products if product['id'] == product_id), None)
    if product:
        return jsonify(product)
    return jsonify({"message": "Ürün bulunamadı"}), 404

@app.route('/products/category/<string:category>', methods=['GET'])
def get_products_by_category(category):
    category_products = [product for product in products if product['category'].lower() == category.lower()]
    if category_products:
        return jsonify(category_products)
    return jsonify({"message": "Kategoriye ait ürün bulunamadı"}), 404

@app.route('/products/search', methods=['GET'])
def search_products():
    query = request.args.get('q', '').lower()
    if not query:
        return jsonify({"message": "Arama sorgusu eksik"}), 400
    results = [product for product in products if query in product['name'].lower()]
    if results:
        return jsonify(results)
    return jsonify({"message": "Ürün bulunamadı"}), 404

@app.route('/products/sort', methods=['GET'])
def sort_products():
    sorted_products = sorted(products, key=lambda x: min(site['price'] for site in x['sites']))
    return jsonify(sorted_products)

if __name__ == '__main__':
    app.run(debug=True , port=80)
