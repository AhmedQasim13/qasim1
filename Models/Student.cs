using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace GPQassim.Models;

public partial class Student
{
    public int StId { get; set; }

    public short? Grade { get; set; }

    public string? PhoneNumber { get; set; }

    public string? StName { get; set; }

    public string? Department { get; set; }

    public string? Division { get; set; }
    public int? count { get; set; }

    public virtual ICollection<Questionnaire> Questionnaires { get; set; } = new List<Questionnaire>();
    public static Student GetStudent(int? id)
    {

        using (var dbContext = new GpContext())
        {
            return dbContext.Students.SingleOrDefault(m => m.StId==id);
        }
    }
}
