using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class DataContext: IdentityDbContext<User, IdentityRole<int>, int>
    {
        public DataContext(DbContextOptions opt) : base(opt)
        {

        }
    }
}
