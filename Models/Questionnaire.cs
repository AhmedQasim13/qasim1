using System;
using System.Collections.Generic;

namespace GPQassim.Models;

public partial class Questionnaire
{
    public int Number { get; set; }

    public int? StId { get; set; }

    public int? QId { get; set; }

    public int? AStatus { get; set; }

    public int? BStatus { get; set; }

    public int? CStatus { get; set; }

    public int? DStatus { get; set; }

    public virtual Question? QIdNavigation { get; set; }

    public virtual Student? St { get; set; }
}
