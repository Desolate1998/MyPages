using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class BlogPostLike:Like
    {
        public ulong BlogPostId { get; set; }
        public BlogPost BlogPost { get; set; }

        public ICollection<Like> Likes { get; set; }
	}
}
