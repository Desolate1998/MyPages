using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Like
    {
		
        public ulong Id { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }

    }
}
