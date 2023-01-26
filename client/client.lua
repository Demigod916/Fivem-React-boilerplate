local focus = false

RegisterCommand("toggleui", function()
    focus = not focus
    SetNuiFocus(focus, focus) --enables mouse and keyboard controls for the nui / disables game control
    SendNUIMessage({ type = 'openUI', toggle = focus }) --sends information from lua -> React (see handleMessage in app.tsx)
end, false)
