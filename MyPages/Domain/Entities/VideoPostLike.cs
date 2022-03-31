using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class VideoPostLike:Like
    {
        public ulong VideoPostId { get; set; }
        public VideoPost VideoPost { get; set; }
    }
}
