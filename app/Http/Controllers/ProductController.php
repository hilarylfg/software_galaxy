<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'price' => 'required|integer',
            'newPrice' => 'nullable|numeric',
            'rating' => 'required|numeric',
            'count' => 'required|integer',
            'available' => 'required|in:Есть в наличии,Нет в наличии',
            'developer' => 'required|string',
            'picture' => 'required|string',
        ]);

        return Product::create($request->all());
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'title' => 'required',
            'price' => 'required|integer',
            'newPrice' => 'nullable|numeric',
            'rating' => 'required|numeric',
            'count' => 'required|integer',
            'available' => 'required|in:Есть в наличии,Нет в наличии',
            'developer' => 'required|string',
            'picture' => 'required|string',
        ]);

        $product->update($request->all());

        return $product;
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return response()->noContent();
    }
}
