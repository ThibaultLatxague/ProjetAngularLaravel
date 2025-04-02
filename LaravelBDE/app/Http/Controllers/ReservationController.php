<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\reservation;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(reservation::with('soiree:id,nom')->get());
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $reservation = reservation::create($request->all());
        return response()->json($reservation, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(reservation $reservation)
    {
        return response()->json($reservation->load('soiree:id,nom'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, reservation $reservation)
    {
        $reservation->update($request->all());
        return response()->json($reservation);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(reservation $reservation)
    {
        $reservation->delete();
        return response()->json(null, 204);
    }
}
