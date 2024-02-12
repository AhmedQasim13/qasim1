using System;
using System.Collections.Generic;

namespace GPQassim.Models;

public partial class Question
{
    public int QId { get; set; }

    public string? QuestionText { get; set; }

    public string? A { get; set; }

    public string? B { get; set; }

    public string? C { get; set; }

    public string? D { get; set; }

    public virtual ICollection<Questionnaire> Questionnaires { get; set; } = new List<Questionnaire>();
    public static Question GetQuestion(int? id)
    {

        using (var dbContext = new GpContext())
        {
            return dbContext.Questions.SingleOrDefault(m => m.QId == id);
        }
    }
}
