<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $casts = [
        'comments' => 'array'
    ];

    protected $fillable = [
        'name',
        'description',
        'price',
        'imageUrl',
        'category',
        'stock',
        'state',
        'likes',
        'comments'
    ];
}
