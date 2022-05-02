<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResume;
use App\Models\Resume;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Str;
use Intervention\Image\Exception\NotWritableException;

class ResumeController extends Controller
{
	public function __constructor()
	{
		$this->middleware('auth');
	}

	public function create()
	{
		$resume = json_encode(Resume::factory()->make());
		return view('resumes.create', compact('resume'));
	}

	private function savePicture($blob) {
		$img = Image::make($blob);
		$extension = explode('/', $img->mime())[1];
		$saved = false;

		while(!$saved) {
			try {
				$fileName = Str::uuid() . ".$extension";
				$filePath = "/storage/pictures/$fileName";
				$img->save(public_path($filePath));
				$saved = true;
			} catch(NotWritableException $e) {

			}
		}

		return $fileName;
	}

	public function store(StoreResume $request)
	{
		$data = $request->validated();
		$picture = $data['content']['basics']['picture'];
		if ($picture !== '/storage/pictures/default.png') {
			return response($this->savePicture($picture));
		}
		return response('sin imagne');
	}
}
