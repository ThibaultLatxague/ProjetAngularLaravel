<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\goodies;

class GoodiesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(goodies::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $goodie = goodies::create($request->all());
        return response()->json($goodie, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $goodie = goodies::find($id);
        if (!$goodie) {
            return response()->json(['message' => 'Goodie non trouvé'], 404);
        }
        return response()->json($goodie);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, goodies $goodie)
    {
        $goodie->update($request->all());
        return response()->json($goodie);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $goodie = goodies::find($id);

        if ($goodie) {
            $goodie->delete();
            return response()->json(['message' => 'Goodie supprimé avec succès'], 200);
        }
    
        return response()->json(['message' => 'Goodie non trouvé'], 404);
    }
}
