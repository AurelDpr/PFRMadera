<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Client;
use App\Http\Requests\ClientRequest;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Client::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'adresse' => 'required',
            'codePostal' => 'required',
            'ville' => 'required'
        ]);

        $client = Client::create($request->all());

        return response()->json([
            'message' => 'Le client a bien été ajouté !',
            'client' => $client
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        return $client;
        // return $client;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = $request->id;
        $client = Client::find($id);

//        $client->nom = $request->input('nom');
//        $client->prenom = $request->input('prenom');
//        $client->phone = $request->input('phone');
//        $client->email = $request->input('email');
//        $client->adresse = $request->input('adresse');
//        $client->codePostal = $request->input('codePostal');
//        $client->ville = $request->input('ville');

//        $this->validate($request, ['prenom' => 'bail|required|min:50']);
          $client->update($request->all());

        return response()->json([
            'message' => 'Le client a bien été mis à jour !',
            'client' => $client
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // delete
        $client = Client::find($id);
        $client->delete();

        // redirect
        return response()->json([
            'message' => 'Le client a bien été supprimé !',
            'client' => $client
        ]);
    }
}
