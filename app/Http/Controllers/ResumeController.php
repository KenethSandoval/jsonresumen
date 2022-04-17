<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResumeController extends Controller
{
	public function __constructor()
	{
		$this->middleware('auth');
	}

	public function create()
	{
		return view('resumes.create');
	}

	public function store()
	{

	}
}
