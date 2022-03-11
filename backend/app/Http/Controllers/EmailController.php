<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $data = [
            'UserName' => $request->input('userName'),
            'Email' => $request->input('email'),
            'Subject' => $request->input('subject'),
            'Comment' => $request->input('comment')
        ];

        Mail::send('email.email', ['dataView' => $data], function ($message) {
            $message->to('matias2301@hotmail.com')->subject('Contact Form Mail!');
        });

        return response()->json(["message"=>"Email sent successfully"]);
    }
}
