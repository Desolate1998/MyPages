using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class File
    {
        public ulong Id { get; set; }
        public string Name { get; set; }
        public DateTime UploadDate { get; set; }
        public string UserId { get; set; }
        public string Path { get; set; }
        public User User { get; set; }

    }
}
