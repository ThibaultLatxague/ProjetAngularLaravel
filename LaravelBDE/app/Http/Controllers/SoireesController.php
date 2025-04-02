<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\soirees;  // Assurez-vous que le modèle Soiree est correctement importé

class SoireesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(soirees::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $soiree = soirees::create($request->all());
        return response()->json($soiree, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $soiree = soirees::find($id);  // Recherche la soirée par ID
        if (!$soiree) {
            return response()->json(['message' => 'Soirée not found'], 404);  // Si la soirée n'existe pas
        }
        return response()->json($soiree);  // Renvoie l'objet Soiree trouvé
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, soirees $soiree)
    {
        $soiree->update($request->all());
        return response()->json($soiree);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(soirees $soiree)
    {
        $soiree->delete();
        return response()->json(null, 204);
    }
}
