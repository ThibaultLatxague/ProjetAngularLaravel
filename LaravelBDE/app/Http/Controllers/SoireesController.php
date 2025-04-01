<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SoireesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Soiree::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $soiree = Soiree::create($request->all());
        return response()->json($soiree, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $soiree = Soiree::find($id);  // Recherche la soirée par ID
        if (!$soiree) {
            return response()->json(['message' => 'Soirée not found'], 404);  // Si la soirée n'existe pas
        }
        return response()->json($soiree);  // Renvoie l'objet Soiree trouvé
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Soiree $soiree)
    {
        $soiree->update($request->all());
        return response()->json($soiree);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Soiree $soiree)
    {
        $soiree->delete();
        return response()->json(null, 204);
    }
}
