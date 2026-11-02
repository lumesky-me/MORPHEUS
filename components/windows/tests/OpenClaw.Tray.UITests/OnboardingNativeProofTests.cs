namespace OpenClaw.Tray.UITests;

public sealed class OnboardingNativeProofTests
{
    [Theory]
    [InlineData("Set up your AI", "", "", true)]
    [InlineData("Set up a local model", "", "", true)]
    [InlineData("Set up MORPHEUS", "Set up OpenCIaw", "Set up OpenCIaw", true)]
    [InlineData("Set up MORPHEUS", "MORPHEUS Setup Set up OpenCIaw Next", "Set up OpenCIaw Next", true)]
    [InlineData("Set up MORPHEUS", "Set up OpenCIaw", "", false)]
    [InlineData("Set up MORPHEUS", "", "Set up OpenCIaw", false)]
    [InlineData("Set up MORPHEUS", "Set up OpenCIaw", "Set up MORPHEUS", false)]
    [InlineData("Set up MORPHEUS", "Set up MORPHEUS", "Set up OpenCIaw", false)]
    [InlineData("Set up MORPHEUS", "Set up OpenCIawful", "Set up OpenCIawful", false)]
    [InlineData("Set up MORPHEUS", "Reset up OpenCIaw", "Reset up OpenCIaw", false)]
    [InlineData("Set up MORPHEUS", "Set up Openclaw", "Set up Openclaw", false)]
    [InlineData("Set up MORPHEUS", "Set up MORPHEUS", "Set up MORPHEUS", false)]
    [InlineData("Set up OpenCIaw", "Set up OpenCIaw", "Set up OpenCIaw", false)]
    [InlineData("Back", "Set up OpenCIaw", "Set up OpenCIaw", false)]
    public void ManualLabelException_RequiresExactExpectedTitleAndAmbiguityInBothPasses(
        string expected, string original, string scaled, bool allowed)
    {
        var error = Record.Exception(() =>
            OnboardingNativeProof.AssertManualLabelExceptions([expected], original, scaled));
        if (allowed)
            Assert.Null(error);
        else
            Assert.IsAssignableFrom<Xunit.Sdk.XunitException>(error);
    }

    [Theory]
    [InlineData("Set up MORPHEUS")]
    [InlineData("Set up your AI")]
    public void ManualLabelException_RejectsAnyAdditionalUnapprovedMissingLabel(string allowed)
    {
        Assert.ThrowsAny<Xunit.Sdk.XunitException>(() =>
            OnboardingNativeProof.AssertManualLabelExceptions(
                [allowed, "Next"], "Set up OpenCIaw", "Set up OpenCIaw"));
    }
}
