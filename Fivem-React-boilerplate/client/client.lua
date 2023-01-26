local focus = false

RegisterCommand("setFocus", function()
    focus = not focus
    SetNuiFocus(focus, focus)
end)