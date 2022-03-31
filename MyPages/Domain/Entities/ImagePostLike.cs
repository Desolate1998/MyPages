using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class ImagePostLike:Like
    {
        public ulong ImagePostId { get; set; }
        public ImagePost ImagePost{ get; set; }
    }
}
