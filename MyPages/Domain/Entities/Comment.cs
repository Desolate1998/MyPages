using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Comment
    {
        public ulong Id { get; set; }
        public ulong PostId { get; set; }
        public string UserId { get; set; }
        public string CommentText { get; set; }
        public ulong? ReplyingToCommentId { get; set; }
        public Comment ReplyingToComment { get; set; }
        public User User { get; set; }
        public Post Post { get; set; }
        public BlogPost BlogPost { get; set; }
        public GeneralPost GeneralPost { get; set; }
        public ImagePost ImagePost { get; set; }
        public VideoPost VideoPost { get; set; }

	}
}
