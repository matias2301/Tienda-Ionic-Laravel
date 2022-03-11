<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {        
        $request->validate([
            'name'          => 'required',
            'description'   => 'required',
            'price'         => 'required',
            // 'imageUrl'      => 'required',
            'category'      => 'required',
            'stock'         => 'required',
            'state'         => 'required'
        ]);

        // [
        //     IMG_20200320_154429_386,
        //     IMG_20200415_161829_379,
        //     IMG_20200415_161829_380,
        //     IMG_20200415_160955346
        // ]

        // Save to DB
        $product  = Product::create([
            'name'          => $request->name,
            'description'   => $request->description,
            'price'         => $request->price,
            'imageUrl'      => $request->imageUrl,
            'category'      => $request->category,
            'stock'         => $request->stock,
            'state'         => $request->state,
            'likes'         => $request->likes,
            'comments'      => $request->comments,
        ]);        
        // Return Response
        return response()->json($product);
    }

    public function update(Request $request, Product $product)
    {        
        $request->validate([
            'name'          => 'required',
            'description'   => 'required',
            'price'         => 'required',
            'imageUrl'      => 'required',
            'category'      => 'required',
            'stock'         => 'required',
            'state'         => 'required'
        ]);
        
        $product->update([
            'name'          => $request->name,
            'description'   => $request->description,
            'price'         => $request->price,
            'imageUrl'      => $request->imageUrl,
            'category'      => $request->category,
            'stock'         => $request->stock,
            'state'         => $request->state,
        ]);

        // Return Response
        return response()->json($product);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json($product);
    }
}