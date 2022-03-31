using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Post
    {
			
        public ulong Id { get; set; }
        public DateTime  DatePosted { get; set; }
        public string UserId { get; set; }
 
        public ICollection<Comment> Comments { get; set; }
        public User User { get; set; }

		

    }
}
