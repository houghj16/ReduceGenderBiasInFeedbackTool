using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReduceGenderBiasInFeedbackTool.Models;

namespace ReduceGenderBiasInFeedbackTool.Data
{
    public class ReduceGenderBiasInFeedbackToolContext : DbContext
    {
        public ReduceGenderBiasInFeedbackToolContext (DbContextOptions<ReduceGenderBiasInFeedbackToolContext> options)
            : base(options)
        {
        }

        public DbSet<ReduceGenderBiasInFeedbackTool.Models.Feedback> Feedback { get; set; } = default!;
    }
}
