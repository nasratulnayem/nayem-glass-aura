import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink, X, Youtube } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  views: string;
}

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videos: Video[] = [
    {
      id: 'video-001',
      title: 'Building Custom WordPress Themes from Scratch',
      description: 'Learn how to create professional WordPress themes with custom functionality and modern design patterns.',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '25:30',
      views: '12.5K'
    },
    {
      id: 'video-002',
      title: 'Advanced CSS Grid and Flexbox Techniques',
      description: 'Master modern CSS layout techniques to create responsive and flexible web designs.',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '18:45',
      views: '8.2K'
    },
    {
      id: 'video-003',
      title: 'WordPress Performance Optimization Tips',
      description: 'Discover proven strategies to optimize WordPress sites for speed and better user experience.',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '32:15',
      views: '15.7K'
    }
  ];

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
    setIsPlaying(false);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  const playVideo = () => {
    setIsPlaying(true);
  };

  const openOnYouTube = (youtubeId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

  return (
    <section id="videos" className="py-20 bg-surface-glass">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Videos
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Educational content and tutorials on web development
          </p>
          <Button
            onClick={() => window.open('https://youtube.com/@nasratulnayem', '_blank')}
            className="glass-intense hover-lift px-8 py-3 font-medium bg-text-primary text-background"
            size="lg"
          >
            <Youtube className="h-5 w-5 mr-2" />
            Visit YouTube Channel
          </Button>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="glass-intense rounded-lg overflow-hidden hover-lift cursor-pointer group"
              onClick={() => openVideo(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-black ml-1" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-text-primary transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-text-muted text-sm mb-4 line-clamp-3">
                  {video.description}
                </p>
                
                {/* Video Meta */}
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>{video.views} views</span>
                  <div className="flex items-center gap-1">
                    <Youtube className="h-3 w-3" />
                    <span>YouTube</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 animate-fade-in">
            <div className="glass-intense rounded-lg max-w-4xl w-full animate-scale-in">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border-glass">
                <h3 className="text-xl font-bold text-text-primary line-clamp-1">
                  {selectedVideo.title}
                </h3>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => openOnYouTube(selectedVideo.youtubeId)}
                    variant="secondary"
                    size="sm"
                    className="glass"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    YouTube
                  </Button>
                  <Button
                    onClick={closeVideo}
                    variant="secondary"
                    size="sm"
                    className="glass"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Video Player */}
              <div className="p-6">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                      title={selectedVideo.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={selectedVideo.thumbnail}
                        alt={selectedVideo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <Button
                          onClick={playVideo}
                          className="w-20 h-20 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full text-black"
                          size="lg"
                        >
                          <Play className="h-10 w-10 ml-2" />
                        </Button>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white text-sm px-3 py-1 rounded">
                        {selectedVideo.duration}
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Description */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <span>{selectedVideo.views} views</span>
                      <span>Duration: {selectedVideo.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-text-muted leading-relaxed">
                    {selectedVideo.description}
                  </p>
                  
                  <div className="mt-6 flex gap-3">
                    <Button
                      onClick={() => openOnYouTube(selectedVideo.youtubeId)}
                      className="glass hover-lift"
                    >
                      <Youtube className="h-4 w-4 mr-2" />
                      Watch on YouTube
                    </Button>
                    <Button
                      onClick={() => window.open('https://youtube.com/@nasratulnayem', '_blank')}
                      variant="secondary"
                      className="glass hover-lift"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      More Videos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Videos;