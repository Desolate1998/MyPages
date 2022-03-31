using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using File = Domain.Entities.File;

namespace DataAccess
{
    public class DataContext: IdentityDbContext<User>
    {
        public DataContext(DbContextOptions opt) : base(opt)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
	        builder.Entity<Comment>(entity =>
	        {
		        entity.HasKey(x => x.Id);
		        entity.HasOne(x => x.User).WithMany(x => x.Comments).HasForeignKey(x => x.UserId);
		        entity.HasOne(x => x.Post).WithMany(x => x.Comments).HasForeignKey(x => x.PostId);

	        });
	        builder.Entity<File>(entity =>
	        {
		        entity.HasKey(x => x.Id);
		        entity.HasOne(x => x.User).WithMany(x => x.Files).HasForeignKey(x => x.UserId);


	        });
			builder.Entity<Post>(entity =>
	        {
		        entity.HasKey(x => x.Id);
		        entity.HasOne(x => x.User).WithMany(x => x.Posts).HasForeignKey(x => x.UserId);

	        });
			builder.Entity<Like>(entity =>
			{
				entity.HasKey(x => x.Id);
				entity.HasOne(x => x.User).WithMany().HasForeignKey(x => x.UserId);

			});

			base.OnModelCreating(builder);
        }

        public DbSet<BlogPost> BlogPosts{ get; set; }
        public DbSet<BlogPostLike> BlogPostLikes { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Domain.Entities.File> Files { get; set; }
        public DbSet<GeneralPost> GeneralPosts { get; set; }
        public DbSet<GeneralPostLike> GeneralPostLikes { get; set; }
        public DbSet<ImagePost> ImagePosts { get; set; }
		public DbSet<ImagePostLike> ImagePostLikes { get; set; }
		public DbSet<Like> Likes { get; set; }
		public DbSet<Post> Posts { get; set; }

		public DbSet<VideoPost> VideoPosts { get; set; }
		public DbSet<VideoPostLike> VideoPostLikes { get; set; }
    }
}
