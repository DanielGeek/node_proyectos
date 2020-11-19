<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Notas;

class ApiController extends Controller
{
    public function index()
    {
        $notas = Notas::all();
        return response()->json(['notas' => $notas]);
    }
}
