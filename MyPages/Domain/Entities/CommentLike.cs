﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class CommentLike:Like
    {

        public ulong CommentId { get; set; }
        public Comment Comment { get; set; }
    }
}
