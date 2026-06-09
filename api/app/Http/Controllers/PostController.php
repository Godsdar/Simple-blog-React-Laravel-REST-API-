<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    function index()
    {
        return Post::all();
    }

    function show($id)
    {
        return Post::find($id);
    }
}
