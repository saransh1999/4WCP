using System;
using System.Collections.Generic;

namespace authtest.DirModels;

public partial class Decodemanager
{
    public string ResourceName { get; set; } = null!;

    public int ResourceId { get; set; }

    public string Passwords { get; set; } = null!;

    public string? IsManager { get; set; }
}
