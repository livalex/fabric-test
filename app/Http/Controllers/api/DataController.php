<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\Poster;
use Illuminate\Support\Facades\Log;

class DataController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $movieData = Movie::all();
        $posterDataData = Poster::all();
        return ['movies' => $movieData, 'posters' => $posterDataData];
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // object
        // error_log(gettype($request));
        // error_log($request);
        // Log::channel('stderr')->info('Something happened!');
        // error_log($value);
        // $array = (array) $request;
        foreach (collect($request)->all() as $key => $value) {
            if (!Movie::where('imdbID', $value['imdbID'])->exists()) {
            
                $movieData = new Movie();
                $movieData->Title = $value['Title'];
                $movieData->Year = $value['Year'];
                $movieData->imdbID = $value['imdbID'];
                $movieData->Type = $value['Type'];
                $movieData->save();
                
                $posterData = new Poster();
                $posterData->imdbID = $value['imdbID'];
                $posterData->Poster = $value['Poster'];
                $posterData->save();
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $data = Movie::find($id);
        return $data;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $data = Movie::find($id);
        $data->Title = $request->Title;
        $data->Year = $request->Year;
        $data->imdbID = $request->imdbID;
        $data->Type = $request->Type;
        $data->Poster = $request->Poster;
        $data->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data = Movie::find($id);
        $data->delete();
    }
}
