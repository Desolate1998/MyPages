using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class User : IdentityUser
    {
        public ICollection<File> Files { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Post> Posts { get; set; }
        public ICollection<BlogPost> BlogPosts { get; set; }
        public ICollection<GeneralPost> GeneralPosts { get; set; }
        public ICollection<ImagePost> ImagePosts { get; set; }
        public ICollection<VideoPost> VideoPosts { get; set; }
    }

 
}
