from pytube import YouTube
from capture import capture_image_in_video

yt_url = 'https://www.youtube.com/watch?v=iUdE1xyjxhQ'
yt_filename = "workman"

yt = YouTube(yt_url)
print(yt.title)
# print(yt.streams.all())
yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download(filename=yt_filename)
capture_image_in_video(f"{yt_filename}.mp4",4)





