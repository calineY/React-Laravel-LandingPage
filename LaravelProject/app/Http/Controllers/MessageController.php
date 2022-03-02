<?php

namespace App\Http\Controllers;
use Validator;
use Illuminate\Http\Request;
use App\Models\Message;
use App\Http\Controllers\Controller;

class MessageController extends Controller
{
    function addMessage(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:100|',
            'subject' => 'required|string|min:2',
            'content' => 'required|string|min:2'
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $message = new Message;
        $message->email = $request->email;
        $message->subject = $request->subject;
        $message->content = $request->content;
        $message->save();

        return response()->json([
            'message' => 'Message sent',
        ], 201);

    }
}

